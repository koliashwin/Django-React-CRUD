Python Dependancies :-
    django,
    djangorestframework,
    django-cors-headers,

Step 1: 
    Create virtual environment and install required dependancies
    create project using command "django-admin startproject [projectname]"
    move inside the project folder and create app using command "py manage.py startapp [appname]"
    test if the app is running properly using command "py manage.py runserver"

    here if you can see that rocket on your screen then your basic django app is running properly

Step 2:
    Now its time to register our app([appname]) under INSTALLED_APPS located in "[projectname]/settings.py"
    let's create model, it's basically a database table. to create model write code in "[appname]/models.py" file
    after creating a model we need to run 2 commands
    "py manage.py makemigrations" to create table/schema
    "py manage.py migrate" to apply changes into database

Step 3:
    to test our model with django's admin interface write code into "[appname]/admin.py" file
    to access the admin interface you'll need to create a superuser using command "py manage.py createsuperuser" we only need the username and password so you can bypass the validations for now
    now run the project using "py manage.py runserver" navigate to "http://localhost:8000/admin" and login into admin panal
    here you can create, edit and delet Todo(model which we have created) items

Step 4:
    we are goting to use Django REST framework so lets add required dependancies (djangorestframework, django-cors-headers)
    after installation lets setup in "[projectname]/settings.py" file
    add "corsheaders" and "rest_framework" under INSTALLED_APPS
    and add "corsherders.middleware.CorsMiddleware" into MIDDLEWARE
    then add follwing variable to same file this will allow the frontend to interect with API 
        CORS_ORIGIN_WHITELIST = [
        'http://localhost:3000'
        ]

Step 5:
    we'll be needing the serializer, it basically converts the complex Django data to JSON Data so our forntend can work with received data
    to do this lets create "serializers.py" file inside your app and write a code into it

Step 6:
    now create a view in "[appname]/views.py"
    to create views we are going to use viewsets form rest_framework beause viewset based classes provides the implementation for crud operations by default via "serializer_class and quryset"

Step 7:
    now let setup our API's url open the "[projectname]/urls.py" file and write code