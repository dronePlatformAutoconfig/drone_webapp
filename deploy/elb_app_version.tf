variable "env" {
  type = string
}

locals {
  app_name = "drone-webapp"
  cname_prefix = "webapp"
  app_version = "${local.app_name}-version"
  bucket_name = "${local.app_name}-bucket"
}

resource "aws_s3_bucket" "default" {
  bucket = local.bucket_name
}

resource "aws_s3_bucket_object" "app_archive" {
  bucket = aws_s3_bucket.default.id
  key    = "beanstalk/app.zip"
  source = "../app.zip"
}

resource "aws_elastic_beanstalk_application" "default" {
  name        = local.app_name
  description = "Monitoring system for drone station"
}

resource "aws_elastic_beanstalk_application_version" "default" {
  name        = local.app_version
  application = aws_elastic_beanstalk_application.default.name
  description = "application version created by terraform"
  bucket      = aws_s3_bucket.default.id
  key         = aws_s3_bucket_object.app_archive.key
}

resource "aws_elastic_beanstalk_environment" "prod" {
  name                = "${local.app_name}-${var.env}"
  application         = aws_elastic_beanstalk_application.default.name
  version_label       = aws_elastic_beanstalk_application_version.default.name
  solution_stack_name = "64bit Amazon Linux 2 v5.3.2 running Node.js 14"
  cname_prefix = local.cname_prefix

  setting {
    namespace = "aws:autoscaling:launchconfiguration"
    name = "IamInstanceProfile"
    value = "aws-elasticbeanstalk-ec2-role"
  }
}


