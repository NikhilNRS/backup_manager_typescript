import { EC2Client, DescribeInstancesCommand } from "@aws-sdk/client-ec2";

const client = new EC2Client({})
const command = new DescribeInstancesCommand({});
const response = client.send(command).then(
    (data: any) => {data.Reservations?.forEach((reservation: any) => {
      reservation.Instances?.forEach((instance: any ) => {
        // Get the VolumeId of the first disk
        const volumeId = instance.BlockDeviceMappings?.[0].Ebs?.VolumeId;

        // Check if backups are enabled
        const backupsEnabled = instance.Tags?.some((tag: any) => tag.Key === 'Backups' && tag.Value === 'Enabled');

        // Get the latest backup time
        const backupTime = instance.Tags?.find((tag: any) => tag.Key === 'LatestBackup')?.Value;
        
        console.log(`Instance ID: ${instance.InstanceId}`);
        console.log(`Volume ID: ${volumeId}`);
        console.log(`Backups enabled: ${backupsEnabled}`);
        console.log(`Latest backup time: ${backupTime}`);
      });
    });}
)

