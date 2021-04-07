#Build Phase
#-------------------------------------------------
#Set Base Image to use
FROM node:alpine

#Create a Working Directory for us to work in
WORKDIR '/app'

#Copy the files that  need to be there in the beginning
COPY package.json .
#Install stuff
RUN npm install
#Copy the rest that doesnt need to be there for the install
COPY . .
#run the build
RUN npm run build
#-------------------------------------------------

#RUN Phase
FROM nginx

#Copy build Folder from Builder Phase in the HTML DIrectory
COPY --from=0 /app/build /usr/share/nginx/html