from rest_framework import serializers
from .models import Member, DoneList, Like, Comment, DM

#로그인 성공하면 해당 유저의 nick을 보내주기

class MemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = '__all__'

class DoneListSerializer(serializers.ModelSerializer):
    class Meta:
        model = DoneList
        fields = '__all__'

class DoneContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = DoneList
        fields = '__all__'
        lookup_field = 'userId'
    

class LikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Like
        fields = '__all__'


class LikeContentSerializer(serializers.ModelSerializer):
    userId = MemberSerializer(read_only = True)
    class Meta:
        model = Like
        fields = ('_id', 'userId','doneId')


        
class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ('_id','userId','doneId','comment')
        read_only_fields = ('doneId')
        
        
        
class DMSerializer(serializers.ModelSerializer):
    class Meta:
        model = DM
        fields = ('_id','sendId','receiveId','message','doneId','time')