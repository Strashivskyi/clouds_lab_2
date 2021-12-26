FROM python:3.8

WORKDIR /postservice

RUN apt-get update -y
RUN apt-get install -y git

RUN git clone -b lab-4 https://github.com/Strashivskyi/clouds_lab_2.git

WORKDIR /postservice/clouds_lab_2/item-3

RUN pip3 install requests

CMD ["python3", "post.py"]
