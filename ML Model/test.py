import torch
import torch.nn as nn
from torchvision import models, transforms
from PIL import Image

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

model = models.resnet50(pretrained=False)
num_ftrs = model.fc.in_features
model.fc = nn.Linear(num_ftrs, 2)
model.load_state_dict(torch.load('layer1cnn(biodegradable_nonbiodegradable).pth', map_location=device))
model = model.to(device)
model.eval()

transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]),
])

img_path = '../src/assets/Aanan.jpg'
img = Image.open(img_path).convert('RGB')
img = transform(img).unsqueeze(0).to(device)

with torch.no_grad():
    output = model(img)
    _, predicted = torch.max(output, 1)

classes = ['biodegradable', 'nonbiodegradable']
print(f"Predicted Class: {classes[predicted.item()]}")
