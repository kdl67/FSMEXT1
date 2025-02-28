function getServiceCall(serviceCall_id) {
  	urlRef = `https://de.fsm.cloud.sap/api/data/v4/ServiceCall/1F7C0EB08C374A028015F0C57EE1C667?dtos=ServiceCall.27&account=Polaris-Sandbox&company=GT-Testing`;
		const settings = {
			async: true,
			crossDomain: true,
			url: urlRef,
			method: 'GET',
			headers: {
				'Host': 'de.fsm.cloud.sap',
				'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImNsb3VkLWF1dGhlbnRpY2F0aW9uLXNlcnZpY2UtZGUifQ.eyJjb21wYW5pZXMiOlt7ImlkIjoxMDc2NTQsIm5hbWUiOiJTNEUtVGVzdGluZyIsImRlc2NyaXB0aW9uIjoiUzRFLURldmVsb3BtZW50Iiwic3RyaWN0RW5jcnlwdGlvblBvbGljeSI6ZmFsc2UsInBlcm1pc3Npb25Hcm91cElkIjo1MDc2Mn0seyJpZCI6MTEwNTQ2LCJuYW1lIjoiR1QtVGVzdGluZyIsImRlc2NyaXB0aW9uIjoiR1QtVGVzdGluZyIsInN0cmljdEVuY3J5cHRpb25Qb2xpY3kiOnRydWUsInBlcm1pc3Npb25Hcm91cElkIjo1MDc2Mn0seyJpZCI6MTEwNTg4LCJuYW1lIjoiUzRFLVE0MCIsImRlc2NyaXB0aW9uIjoiUzRFLVE0MCIsInN0cmljdEVuY3J5cHRpb25Qb2xpY3kiOmZhbHNlLCJwZXJtaXNzaW9uR3JvdXBJZCI6NTA3NjJ9XSwiYWNjb3VudF9pZCI6OTQ0OTIsInBlcm1pc3Npb25fZ3JvdXBfaWQiOjUwOTI5LCJleHAiOjE3NDA3NTI2MDEsImF1dGhvcml0aWVzIjpbIkFDQ09VTlQiLCJDTElFTlQiXSwianRpIjoidjI2VXlqOGFGYy0waUl2ZjV5dG5KNmNJY3E0IiwiYWNjb3VudCI6IlBvbGFyaXMtU2FuZGJveCIsImNsaWVudF9pZCI6IjAwMDE3MTFjLUludGVncmF0aW9uVGVzdFBvc3RtYW4ifQ.drLUGuuF-W2d9v8HFx4sg5Eto6sMsC4iBZwR5UiYL6a9ZX-fU_fDrswPhU3kKv3Z05i2Yn31-BG_BWqPIr3RjTwtJoZ-IUBtGwlehtteOOmfINp1WRC9z0C7jHcdEmfPOfPlTZrdvD6n4iYuqQaTtODwCrBm9OCgUQVskEZNOM_1442WpuIR2YTj7xr_DRayoLIYcpDnLGJk2V005siDby2aarM7IAGOKAooUtbhfi_Dul7CZE8a3NGhZRkSvmhidCGC9csw5EYJ5dkm9qujbgerojav7uvd1sSN2WmH33B1wurmCf8nFwXrlACbf86FxuFztxGrF9NkumuMXCUGtA',
				'Content-Type': 'application/json',
				'X-Client-ID': 'fsm-extension-sample',
				'X-Client-Version': '1.0.0',
				'Accept': 'application/json'
			}		
		};

		$.ajax(settings).done(function (response) {
		let projectList = "";
		for  (let i = 0; i < response.data.length; i++) {
			projectList += "<b>Service Call:</b> " + response.data[i].serviceCall.code + " <b>Description:</b> " + response.data[i].serviceCall.subject + "<br>" ;
		}
			// $("#Output").html(projectList);
			// $("#Output").addClass("div2");
		});
	};

  });


