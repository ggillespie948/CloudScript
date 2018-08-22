


handlers.DailyChallengeComplete = function()
{
	var UpdateUserReadOnlyDataRequest = {
        	"PlayFabId": currentPlayerId,
        	"Data": {}
    };
    UpdateUserReadOnlyDataRequest.Data["DailyChallengeComplete"] = "1";

    server.UpdateUserReadOnlyData(UpdateUserReadOnlyDataRequest);  
}

handlers.ResetDailyChallenge = function()
{
	var UpdateUserReadOnlyDataRequest = {
        	"PlayFabId": currentPlayerId,
        	"Data": {}
    };
    UpdateUserReadOnlyDataRequest.Data["DailyChallengeComplete"] = "0";

    server.UpdateUserReadOnlyData(UpdateUserReadOnlyDataRequest);  
}

