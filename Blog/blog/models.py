from django.db import models
from django.utils import timezone
from django.urls import reverse

# Create your models here.

class Post(models.Model):
    # the author is an auth or registered user here
    author = models.ForeignKey('auth.User',on_delete=models.DO_NOTHING,)
    title = models.CharField(max_length=200)
    text = models.TextField()
    create_date = models.DateTimeField(default=timezone.now())
    published_date = models.DateTimeField(blank=True,null=True)

    # creating a func to fill in published_Date automatically
    def publish(self):
        self.published_date = timezone.now()
        self.save()

    # showing only approved comments
    def approve_comments(self):
        return self.comments.filter(approved_comments=True)

    # default method which Django looks after successful submission
    # here, after submit, user goes to post page which just got created
    # based on the self.primary_key passed
    def get_absolute_url(self):
        return reverse("post_detail",kwargs={'pk':self.pk})

    # as practice, having a str return title of blog
    def __str__(self):
        return self.title

# creating a class for comment representation
class Comment(models.Model):
    # post field is related to Post class in blog app
    post = models.ForeignKey('blog.Post',related_name='comments',on_delete=models.DO_NOTHING)
    author = models.CharField(max_length=200)
    text = models.TextField()
    create_date = models.DateTimeField(default=timezone.now())
    approved_comment = models.BooleanField(default=False)

    # on approve, the comment must have approved=true so as to be visible
    def approve(self):
        self.approved_comment = True
        self.save()

    # on successful submission of comment, user is directed to
    # the homepage having list of all posts
    def get_absolute_url(self):
        return reverse('post_list')
    
    def __str__(self):
        return self.text

    