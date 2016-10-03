list = []
temp = 0
min = 0
max = 0
import random
# sorting 100 random numbers took 0.115s
# sorting 10000 random numbers took 15.969s
# sorting by moving the min value to the left ONLY
for i in range(1,10000):
    list.append(random.randint(0,10000))
print list
for x in range(0,9999):
    for y in range(x,9999):
        min = list[x]
        if list[y]< min :
            temp = list[y]
            list[y] = list[x]
            list [x] = temp
print list
