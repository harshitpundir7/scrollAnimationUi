from PIL import Image
import sys

try:
    img = Image.open('redbull assets/ezgif-frame-001.jpg')
    width, height = img.size
    
    # Check 4 corners
    corners = [
        img.getpixel((0, 0)),
        img.getpixel((width - 1, 0)),
        img.getpixel((0, height - 1)),
        img.getpixel((width - 1, height - 1))
    ]
    
    print("Corner pixels:", corners)
except Exception as e:
    print(e)
