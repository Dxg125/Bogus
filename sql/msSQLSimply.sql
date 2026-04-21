-- Selects-- 
SELECT * FROM [CCStat].[dbo].[tSubscription] WHERE AgentID = 2146;
/* DELETE FROM [CCStat].[dbo].[tSubscription] WHERE AgentID = 2146; */  
-- SELECT * FROM [CCStat].[dbo].[tSubscription] WHERE AgentID = 1645;
-- SELECT * FROM [CCStat].[dbo].[tSubscription] order by AgentID  
-- BCI USER -- 
SELECT * FROM [CCStat].[dbo].[tSubscription] WHERE AgentID = 1092;
-- SELECT * FROM [CCStat].[dbo].[tSubscription] WHERE AgentID = 1432;  
-- DELETE FROM [CCStat].[dbo].[tSubscription] WHERE AgentID = 1432 AND Subscription = 7;
-- BCI 2 USER -- SELECT * FROM [CCStat].[dbo].[tSubscription] WHERE AgentID = 2316;    
/* RBL; FORCE CLEAN */
/* DELETE FROM [CCStat].[dbo].[tSubscription] WHERE AgentID = 2146; */
/* DELETE FROM [CCStat].[dbo].[tSubscription] WHERE AgentID = 2316; */  

SELECT t1.AgentID, t1.EndPoint, t1.VoIPKey, t2.EndPoint, t2.VoIPKey, t1.LastUpdate, t2.LastUpdate, t1.MachineID, t2.MachineID FROM [CCStat].[dbo].[tSubscription] as t1JOIN [CCStat].[dbo].[tSubscription] as t2 ON t1.AgentID = t2.AgentID AND t1.Subscription != t2.SubscriptionWHERE t1.Deleted = 0 AND t2.Deleted = 0 AND t1.Productive = 1 AND t2.Productive = 1  AND (YEAR(t1.LastUpdate) = 2025 OR YEAR(t2.LastUpdate) = 2025)  ORDER BY t1.AgentID;  
