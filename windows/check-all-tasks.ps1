Get-ScheduledTask | ForEach-Object {
	$Task = $_;
	$Info = Get-ScheduledTaskInfo -InputObject $Task;

	[PSCustomObject] @{
		TaskPath = $Task.TaskPath;
		TaskName = $Task.TaskName;
		Result   = $Info.LastTaskResult;
		HexResult = '0x{0:X}' -f ([uint32] $Info.LastTaskResult);
		Execute  = $Task.Actions.Execute -join '; ';
		Arguments = $Task.Actions.Arguments -join '; ';
	}
} | Format-Table -AutoSize;