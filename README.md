# GitHub OIDC Provider 

Adds the GitHub OIDC provider to your AWS account.

## Usage
This stack only needs to be ran once per AWS account.
After running this stack will create a CloudFormation export named `GitHubOidcProviderArn` that may be
reference in other stacks when granting the `sts:AssumeRoleWithWebIdentity` action to one or more AWS IAM Roles.

For more detail, see: https://github.com/aws-actions/configure-aws-credentials?tab=readme-ov-file#configuring-iam-to-trust-github

### Building 
* `npm run build`   compile typescript to js
* `npm run test`    perform the jest unit tests

### Deploying
* `npx cdk deploy`  deploy this stack to your default AWS account/region
* `npx cdk diff`    compare deployed stack with current state
* `npx cdk synth`   emits the synthesized CloudFormation template
