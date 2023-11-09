https://stackoverflow.com/questions/12887266/get-total-number-of-rows-when-using-limit



SELECT SQL_CALC_FOUND_ROWS name, email FROM users WHERE name LIKE 'a%' LIMIT 10;
SELECT FOUND_ROWS();

From <https://stackoverflow.com/questions/12887266/get-total-number-of-rows-when-using-limit>




                          SELECT SQL_CALC_FOUND_ROWS gr.RecNr, gr.GroupNr, gr.GroupGueltigAb, gr.GroupGueltigBis, gr.EffEndDat, gr.ObjektNr, gr.GroupStatusCd, co.KurzBez,
                          ADDDATE(gr.ErfDat, gr.AngebotDauer), gr.KundenFeld, gr.AutoRenewMt, gr.RabattBetrag, gr.RabattProzent, gr.PreisAnzeigeCd, gr.Waehrung
                          FROM crm_om_group gr
                          LEFT OUTER JOIN crm_sd_code co ON co.Code = gr.GroupStatusCd AND co.CdTypCd = 'GroupStatusCd' AND co.SpCd = 1
                          WHERE gr.ObjektNr IN (1032623,1032655,1052875,1055608,1070155,1071551,1071713,1095621,1104664,1104698,1107215,1117571,1117727,1123068,1123096,1123124,1123152,1123180,1126503,1126506,1126509,1126510,1126511,1126512,1126513,1126514,1126515,1126516,1126517,1126518,1126519,1126520,1126521,1126522,1126523,1126524,1126527,1126528,1126529,1126530,1126533,1126534,1126535,1126542,1126577,1126580,1126581,1126582,1126585,1126588,1126591,1126594,1126597,1126600,1126603,1126606,1126654,1126655,1126656,1126657,1126658,1126659,1126660,1126661,1126676,1126696,1126813,1126930,1127047,1127164,1127165,1127282,1127412,1127470) AND gr.StatusCd = 1 ORDER BY gr.GroupGueltigAb ASC LIMIT 0, 10;

                          SELECT FOUND_ROWS(); //git d'reihe vo allne results zrugg, trotz limit 0,10
//ganz wichtig, keis KOMMA!

