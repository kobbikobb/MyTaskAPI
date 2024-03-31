FROM public.ecr.aws/lambda/nodejs:20 as builder
WORKDIR /usr/app
COPY package*.json ./
RUN npm install
Copy . .
RUN npm run build
    
FROM public.ecr.aws/lambda/nodejs:20
WORKDIR ${LAMBDA_TASK_ROOT}
COPY package*.json ./
RUN npm install --omit=dev
COPY --from=builder /usr/app/dist/* ./
CMD ["index.handler"]
