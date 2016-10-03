list = []
temp = 0
min = 0
import random
for i in range(1,100):
    list.append(random.randint(0,10000))
print list
for x in range(0,99):
    for y in range(x,99):
        min = list[x]
        if list[y]< min :
            temp = list[y]
            list[y] = list[x]
            list [x] = temp
print list
