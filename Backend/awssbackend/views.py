from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
import torch
import torch.nn as nn
from torchvision import models, transforms
from PIL import Image
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import os

# Device setup
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

# Load Model
model = models.resnet50(pretrained=False)
num_ftrs = model.fc.in_features
model.fc = nn.Linear(num_ftrs, 2)
model.load_state_dict(torch.load('../ML Model/layer1cnn(biodegradable_nonbiodegradable).pth', map_location=device))
model.to(device)
model.eval()

# Transformations for the image
transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]),
])

@csrf_exempt
def classify_image(request):
    if request.method == 'POST' and request.FILES.get('file'):
        try:
            # Get image from request
            img_file = request.FILES['file']
            img = Image.open(img_file).convert('RGB')
            img = transform(img).unsqueeze(0).to(device)

            # Perform Prediction
            with torch.no_grad():
                output = model(img)
                _, predicted = torch.max(output, 1)

            classes = ['biodegradable', 'nonbiodegradable']
            return JsonResponse({'message': classes[predicted.item()]})

        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
    return JsonResponse({'error': 'Invalid request'}, status=400)
