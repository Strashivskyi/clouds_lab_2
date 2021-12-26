FROM python:3.8

WORKDIR /pythonbackend

RUN apt-get update -y 
RUN apt-get install -y git pipenv

RUN git clone -b lab-4 https://github.com/Strashivskyi/clouds_lab_2.git

WORKDIR /pythonbackend/clouds_lab_2/amplify/backend/function/machinefunction/src
RUN pip3 install --upgrade pip -r requirements.txt
RUN pip3 install --user pipenv
RUN pip3 --no-cache-dir install --upgrade awscli
RUN pip3 install gunicorn

ENV STORAGE_MYDB_NAME=machine-dev

EXPOSE 5000

CMD ["gunicorn", "-b", ":5000", "index:app"]
