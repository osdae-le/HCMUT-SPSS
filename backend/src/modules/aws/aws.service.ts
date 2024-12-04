import { Injectable } from '@nestjs/common'
import AWS = require('aws-sdk')
import { config } from '../../constants/config'
@Injectable()
export class AwsService {
  private s3: AWS.S3
  constructor() {
    this.s3 = new AWS.S3({
      signatureVersion: 'v4',
      region: config.aws_region,
      params: { Bucket: config.aws_media_bucket },
    })
  }
  async upload(
    file: Express.Multer.File,
    folder: string,
  ): Promise<{
    Location: string
    key: string
    Bucket: string
  }> {
    try {
      const timestamp = Date.now().toString()
      return await this.s3_upload(
        file.buffer,
        config.aws_media_bucket,
        `${folder}/${timestamp}-${file.originalname
          .split('.')[0]
          .replace(/[^\w\s]/g, '') // Remove non-alphanumeric characters
          .toLowerCase()
          .replace(/\s+/g, '-') // Replace spaces with '-'
          .replace(/-{2,}/g, '-') // Replace consecutive '-' with a single '-'
          .replace(/^-+|-+$/g, '')}`,
        file.mimetype,
      )
    } catch (error) {
      throw new Error(error)
    }
  }

  async getFile(fileName: string): Promise<any> {
    return await this.getDownloadUrl(fileName)
  }

  async s3_upload(file, bucket, name, mimetype): Promise<any> {
    const params = {
      Bucket: bucket,
      Key: String(name),
      Body: file,
      ACL: 'public-read',
      ContentType: mimetype,
      ContentDisposition: 'inline',
      CreateBucketConfiguration: {
        LocationConstraint: 'ap-south-2',
      },
    }

    const options = {
      partSize: 100 * 1024 * 1024,
      queueSize: 1,
    }

    try {
      const s3Response = await this.s3.upload(params, options).promise()
      return s3Response
    } catch (e) {
      console.log('error in s3 upload', e)
      return null
    }
  }

  async getDownloadUrl(fileName: string) {
    const s3Params = {
      Bucket: config.aws_media_bucket,
      Key: fileName,
      Expires: 60 * 60, // 1 hour expiry time for the download URL
    }
    const downloadURL = await this.s3.getSignedUrlPromise('getObject', s3Params)
    return {
      downloadURL: downloadURL,
      fileName: fileName,
    }
  }
}
