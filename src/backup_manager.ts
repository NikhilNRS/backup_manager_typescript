import AWS from 'aws-sdk';

// Set the region
AWS.config.update({region: 'us-east-1'});

// Create an EC2 client object
const ec2 = new AWS.EC2();

// Define parameters for the describeInstances function
const params: AWS.EC2.Types.DescribeInstancesRequest = {
  Filters: [
    {
      Name: 'instance-state-name',
      Values: ['running']
    }
  ]
};

// Call the describeInstances function to get a list of running instances
ec2.describeInstances(params, (err, data) => {
  if (err) {
    console.log('Error', err);
  } else {
    // Loop through each instance
    data.Reservations?.forEach(reservation => {
      reservation.Instances?.forEach(instance => {
        // Get the VolumeId of the first disk
        const volumeId = instance.BlockDeviceMappings?.[0].Ebs?.VolumeId;

        // Check if backups are enabled
        const backupsEnabled = instance.Tags?.some(tag => tag.Key === 'Backups' && tag.Value === 'Enabled');

        // Get the latest backup time
        const backupTime = instance.Tags?.find(tag => tag.Key === 'LatestBackup')?.Value;

        // Print the instance details
        console.log(`Instance ID: ${instance.InstanceId}`);
        console.log(`Volume ID: ${volumeId}`);
        console.log(`Backups enabled: ${backupsEnabled}`);
        console.log(`Latest backup time: ${backupTime}`);
      });
    });
  }
});
