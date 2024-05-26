# GitHub OIDC Provider 

Adds the GitHub OIDC provider to your AWS account.
NOTE: this only needs to be ran once per AWS account, multiple AWS IAM Roles can then use Identity Provider ARN exported by this stack to reference when granting the AssumeRole action

For more detail, see: https://github.com/aws-actions/configure-aws-credentials?tab=readme-ov-file#configuring-iam-to-trust-github

## Building 
* `npm run build`   compile typescript to js
* `npm run test`    perform the jest unit tests

## Deploying
* `npx cdk deploy`  deploy this stack to your default AWS account/region
* `npx cdk diff`    compare deployed stack with current state
* `npx cdk synth`   emits the synthesized CloudFormation template
