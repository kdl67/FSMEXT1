function getServiceCall(serviceCall_id) {
  	urlRef = `https://de.fsm.cloud.sap/api/data/v4/ServiceCall/1F7C0EB08C374A028015F0C57EE1C667?dtos=ServiceCall.27&account=Polaris-Sandbox&company=GT-Testing`;
		const settings = {
			async: true,
			crossDomain: true,
			url: urlRef,
			method: 'GET',
			headers: {
				'Host': 'de.fsm.cloud.sap',

				'Authorization': 
				'Content-Type': 'application/json',
				'X-Client-ID': 'fsm-extension-sample',
				'X-Client-Version': '1.0.0',
				'Accept': 'application/json'
			}		
		};

		$.ajax(settings).done(function (response) {
		let projectList = ${serviceCall_id};
		// for  (let i = 0; i < response.data.length; i++) {
		// 	projectList += "<b>Service Call:</b> " + response.data[i].serviceCall.code + " <b>Description:</b> " + response.data[i].serviceCall.subject + "<br>" ;
		// }
			$("#info2").html(projectList);
			// $("#Output").addClass("div2");
		});
	};

  });


