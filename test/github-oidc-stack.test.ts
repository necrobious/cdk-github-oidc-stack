import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { GithubOidcStack } from '../lib/github-oidc-stack';

test('GitHub OIDC Provider Created', () => {
  const app = new cdk.App();
  // WHEN
  const stack = new GithubOidcStack(app, 'GitHubOidcTestStack');
  // THEN
  const template = Template.fromStack(stack);

  template.hasResourceProperties('AWS::IAM::OIDCProvider', {
    Url: 'https://token.actions.githubusercontent.com',
    ClientIdList: [ 'sts.amazonaws.com' ],
    ThumbprintList: [ 'ffffffffffffffffffffffffffffffffffffffff' ],
  });
});
