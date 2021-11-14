from django.db import models

# Create your models here.

class User(models.Model):
    id=models.AutoField(primary_key=True)
    username=models.CharField(max_length=100)
    name=models.CharField(max_length=100)
    email=models.EmailField(unique=True)
    password=models.CharField(max_length=50)

    def __str__(self):
        return self.username
    
class Idea(models.Model):
    id=models.AutoField(primary_key=True)
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    type=models.CharField(choices=[('Crypto','crypto'),('Stocks','stocks')],max_length=50)
    idea=models.CharField(max_length=100)
    share=models.CharField(max_length=6)
    risk=models.CharField(max_length=15)
    target=models.IntegerField()
    stop=models.IntegerField()
    like=models.IntegerField()

    def __str__(self):
        return (self.user.name+"  "+self.share+" idea")
    