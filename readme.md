<ins>**Requirements**</ins>

Nano Service Development

Nano Service Deployment

<ins>**Prerequisites**</ins>

<ins>**Set-up connection to ec2 with putty**</ins>

Session Creation

![](https://github.com/devopsYo/payoneer-counter/blob/feature/config-pipeline/doc/set_up_putty.png?raw=true)


Convert .pem to .ppk

![](https://github.com/devopsYo/payoneer-counter/blob/feature/config-pipeline/doc/convert_pem_to_ppk.png?raw=true)


Add SSH Authentication 

![](https://github.com/devopsYo/payoneer-counter/blob/feature/config-pipeline/doc/ssh_authentication.png?raw=true)


Set-up ec2 – Format and Mount an attached Volume

![](https://github.com/devopsYo/payoneer-counter/blob/feature/config-pipeline/doc/format_mount_volume.png?raw=true)

Ref: <https://docs.aws.amazon.com/ebs/latest/userguide/ebs-using-volumes.html>

Installation agent Azure DevOps for the private runner

![](https://github.com/devopsYo/payoneer-counter/blob/feature/config-pipeline/doc/installation_agent.png?raw=true)

![](https://github.com/devopsYo/payoneer-counter/blob/feature/config-pipeline/doc/agent_running.png?raw=true)





<ins>**Tasks**</ins>

<ins>**Development nano-service with express**<ins>

**2 Morgan Middlewares:**

Logs all requests in daily file access.log

Log current counterPost in separate file


![](https://github.com/devopsYo/payoneer-counter/blob/feature/config-pipeline/doc/sw_archi_counter_service.png?raw=true)

<http://ec2-18-197-66-172.eu-central-1.compute.amazonaws.com/counter>

![](https://github.com/devopsYo/payoneer-counter/blob/feature/config-pipeline/doc/counter_service_running.png?raw=true)

Change it to each different version (docker image tag)

<ins>**Set-up SCM Github**</ins>

Version Branch(= dev branch=master branch) TBD approach

![](https://github.com/devopsYo/payoneer-counter/blob/feature/config-pipeline/doc/branch_protection.png?raw=true)

While cycle development, the dev is merging to the current version branch 1.0.x(it’ s the trunc).

At the end of cycle development, a version branch 2.0.x is created.

![](https://github.com/devopsYo/payoneer-counter/blob/feature/config-pipeline/doc/git_ci_cd.png?raw=true)









<ins>**CI/CD Approach**</ins>

In the job CI, an image docker with specifically version is created and pushed to dockerhub.

In the job CD, the image with specifically version is pulled and deployed(container is started)

![](https://github.com/devopsYo/payoneer-counter/blob/feature/config-pipeline/doc/ci_cd.png?raw=true)

<ins>**Volume Creation - Availability**</ins>

Docker run -v log:/app/log

Docker run –restart=always



<ins>**Effort to create a new service**</ins> –** depends on requirements

**Future improvement :** 

Reusable: Create a template to reuse the pipeline with different parameters.

Use release in Azure DevOps for CD approach.

Scalability: Docker compose or Kubernetes(Cluster) by requirements.








