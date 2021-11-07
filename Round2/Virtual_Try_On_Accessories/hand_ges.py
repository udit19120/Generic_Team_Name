import cv2
import mediapipe as mp
import time
import numpy as np

img = cv2.imread('C:/Users/aabha/Downloads/Final_myntra/Final_myntra/pyscripts/hand.jpeg',1)
img = cv2.resize(img,(300,300))
imgRGB = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
mpHands = mp.solutions.hands
hands = mpHands.Hands(static_image_mode=False,
					  max_num_hands=2,
					  min_detection_confidence=0.5,
					  min_tracking_confidence=0.5)
mpDraw = mp.solutions.drawing_utils

results = hands.process(imgRGB)
print(len(results.multi_hand_landmarks))
#print(results.multi_hand_landmarks)
count =0
outx=0
outy =0
outxx=0
outyy=0
if results.multi_hand_landmarks:
	for handLms in results.multi_hand_landmarks:
		for id, lm in enumerate(handLms.landmark):
			#print(id,lm)
			h, w, c = img.shape
			cx, cy = int(lm.x *w), int(lm.y*h)
			if(count==14):
				outx=cx
				outy=cy
			if(count==0):
				outxx=cx
				outyy=cy
			count+=1
			#if id ==0:
		#cv2.circle(img, (cx,cy), 7, (255,0,255), cv2.FILLED)

		#mpDraw.draw_landmarks(img, handLms, mpHands.HAND_CONNECTIONS)

img_ring = cv2.imread('C:/Users/aabha/Downloads/Final_myntra/Final_myntra/pyscripts/ring2-removebg-preview.png',1)
img_ring = cv2.resize(img_ring,(50,50),interpolation=cv2.INTER_CUBIC)

#img_bracelet = cv2.imread('watch1-removebg-preview.png',1)
img_bracelet = cv2.imread('C:/Users/aabha/Downloads/Final_myntra/Final_myntra/pyscripts/bracelet-removebg-preview.png',1)
img_bracelet = cv2.resize(img_bracelet,(100,100),interpolation=cv2.INTER_CUBIC)

h_brac,w_brac = img_bracelet.shape[:2]
center_brac = (w_brac//2,h_brac//2)

h,w = img_ring.shape[:2]
center = (w//2,h//2)
rotate_matrix = cv2.getRotationMatrix2D(center=center, angle=10, scale=1)
img_ring= cv2.warpAffine(img_ring, rotate_matrix, (w, h))
print(center)
print("---------------")
print(center_brac)

rotate_matrix1 = cv2.getRotationMatrix2D(center=center_brac,angle=-10,scale=2)
img_bracelet=cv2.warpAffine(img_bracelet,rotate_matrix1,(w_brac,h_brac))
x=outx-25
y=outy-10

x_brac = outxx
y_brac = outyy

print(x_brac,y_brac)

imgx=img.copy()
imgx[y:y+img_ring.shape[0], x:x+img_ring.shape[1]] = img_ring
#imgx[y_brac-img_bracelet.shape[0]//2:y_brac+img_bracelet.shape[0]//2,x_brac-img_bracelet.shape[1]//2:x_brac+img_bracelet.shape[1]//2]=img_bracelet

img_result = imgx
for i in range(len(img_result)):
	for j in range(len(img_result[0])):
		if img_result[i][j][0]==0 and img_result[i][j][1]==0 and img_result[i][j][2]==0:
			img_result[i][j][0]=img[i][j][0]
			img_result[i][j][1]=img[i][j][1]
			img_result[i][j][2]=img[i][j][2]

cv2.imwrite("C:/Users/aabha/Downloads/Final_myntra/Final_myntra/client-side/public/images/Img_result.jpeg",img_result)
key = cv2.waitKey(0) & 0xFF
if(key==27):
	cv2.destroyAllWindows()