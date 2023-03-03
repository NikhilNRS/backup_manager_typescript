    // // Get the VolumeId of the first disk
    // const volumeId = instance.BlockDeviceMappings?.[0].Ebs?.VolumeId;

    // // Check if backups are enabled
    // const backupsEnabled = instance.Tags?.some(tag => tag.Key === 'Backups' && tag.Value === 'Enabled');

    // // Get the latest backup time
    // const backupTime = instance.Tags?.find(tag => tag.Key === 'LatestBackup')?.Value;

    // // Print the instance details
    // console.log(`Instance ID: ${instance.InstanceId}`);
    // console.log(`Volume ID: ${volumeId}`);
    // console.log(`Backups enabled: ${backupsEnabled}`);
    // console.log(`Latest backup time: ${backupTime}`);