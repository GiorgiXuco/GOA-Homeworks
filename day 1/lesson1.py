from turtle import *


#we want to paint a hause

#step 1: draw a square
shape("turtle")


width(7)
color("purple")
begin_fill()
forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)
end_fill()
#end of square


#drawing a door

forward(70)
color("yellow")
begin_fill()
left(90)
forward(110)
right(90)
forward(60)
right(90)
forward(110)
end_fill()

penup()
goto(200, 200)
pendown ()

color("red")
begin_fill()
right(150)
forward(200)
left(120)
forward(200)
end_fill( )

penup()
goto(70,130)
pendown()

right(150)

color("brown")
forward(50)
left(90)
forward(50)
left(90)
forward(50)
left(90)
forward(50)


penup()
goto(64,135)
pendown()


color("cyan")
begin_fill()
left(90)
forward(38)
left(90)
forward(38)
left(90)
forward(38)
left(90)
forward(38)
end_fill()

penup()
goto(45,130)

pendown()
color("brown")
left(90)
forward(51)

penup()
goto(70,154)
pendown()

left(90)
forward(50)

penup()
goto(130,130)
pendown()

right(90)
forward(50)

right(90)
forward(50)
right(90)
forward(50)
right(90)
forward(50)

penup()
goto(136,135)
pendown()

color("cyan")
begin_fill()
right(90)
forward(38)
right(90)
forward(38)
right(90)
forward(38)
right(90)
forward(38)
end_fill()

color("brown")

penup()
goto(130,155)
pendown()

right(180)
forward(50)

penup()
goto(155,130)
pendown()

left(90)
forward(50)












exitonclick()