```powershell
docker run -it -p 8090:8090 -p 3478:3478/udp -p 50000-50010:50000-50010/udp -v /appdata/ispyagentdvr/config/:/agent/Media/XML/ -v /appdata/ispyagentdvr/media/:/agent/Media/WebServerRoot/Media/ -v /appdata/ispyagentdvr/commands:/agent/Commands/ --name ispyagentdvr doitandbedone/ispyagentdvr
```