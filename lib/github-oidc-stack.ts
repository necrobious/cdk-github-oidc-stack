import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';

export class GithubOidcStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // see: https://github.com/aws-actions/configure-aws-credentials?tab=readme-ov-file#configuring-iam-to-trust-github
    const github_oidc_provider = new iam.CfnOIDCProvider(this, 'GitHubOidcProvider', {
      url: 'https://token.actions.githubusercontent.com',
      clientIdList: [ 'sts.amazonaws.com' ],
      thumbprintList: [ 'ffffffffffffffffffffffffffffffffffffffff' ]
    });

    new cdk.CfnOutput(this, "GitHubOidcProviderArn", {
      value: github_oidc_provider.attrArn,
      exportName: "GitHubOidcProviderArn",
    });
  }
}
