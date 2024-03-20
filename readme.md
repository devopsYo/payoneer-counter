**Requirements**

Nano Service Development

Nano Service Deployment

**Prerequisites**

**Set-up connection to ec2 with putty**

Session Creation

![](Aspose.Words.4b77ed07-d2e6-4568-b9a6-692cf55a54bf.001.png)


Convert .pem to .ppk

![](Aspose.Words.4b77ed07-d2e6-4568-b9a6-692cf55a54bf.002.png)


Add SSH Authentication 

![](Aspose.Words.4b77ed07-d2e6-4568-b9a6-692cf55a54bf.003.png)


Set-up ec2 – Format and Mount an attached Volume

![](Aspose.Words.4b77ed07-d2e6-4568-b9a6-692cf55a54bf.004.png)

Ref: <https://docs.aws.amazon.com/ebs/latest/userguide/ebs-using-volumes.html>

Installation agent Azure DevOps for the private runner

![](Aspose.Words.4b77ed07-d2e6-4568-b9a6-692cf55a54bf.005.png)

![](Aspose.Words.4b77ed07-d2e6-4568-b9a6-692cf55a54bf.006.png)




**Tasks**

**Development nano-service with express**

**2 Morgan Middlewares:**

`              `Logs all requests in daily file access.log

`              `Log current counterPost in separate file


![](Aspose.Words.4b77ed07-d2e6-4568-b9a6-692cf55a54bf.007.png)

<http://ec2-18-197-66-172.eu-central-1.compute.amazonaws.com/counter>

![](Aspose.Words.4b77ed07-d2e6-4568-b9a6-692cf55a54bf.008.png)

Change it to each different version (docker image tag)

**Set-up SCM Github**

Version Branch(= dev branch=master branch) TBD approach

![](Aspose.Words.4b77ed07-d2e6-4568-b9a6-692cf55a54bf.009.png)

While cycle development, the dev is merging to the current version branch 1.0.x(it’ s the trunc).

At the end of cycle development, a version branch 2.0.x is created.

![](Aspose.Words.4b77ed07-d2e6-4568-b9a6-692cf55a54bf.010.png)









**CI/CD Approach**

In the job CI, an image docker with specifically version is created and pushed to dockerhub.

In the job CD, the image with specifically version is pulled and deployed(container is started)

![](Aspose.Words.4b77ed07-d2e6-4568-b9a6-692cf55a54bf.011.png)

**Volume Creation - Availability**

Docker run -v log:/app/log

Docker run –restart=always



**Effort to create a new service** –** depends on requirements

**Future improvement :** 

Reusable: Create a template to reuse the pipeline with different parameters.

Use release in Azure DevOps for CD approach.

Scalability: Docker compose or Kubernetes(Cluster) by requirements.








