/* ROLLBACK */
SELECT * FROM crm_om_user WHERE EMail = 'lulululu@lululululu.lulululu';
START TRANSACTION;
UPDATE crm_om_user SET StatusCd = 1 WHERE EMail = 'lulululu@lululululu.lulululu';
ROLLBACK;

/* Fehler 1196? => Zeige Tables an, wenn die Engine nicht INNODB ist, sondern z.B. MyISAM, werden Transactions nicht unterstützt */
show table status;

-- 07:53:24	ROLLBACK	0 row(s) affected, 1 warning(s): 1196 Some non-transactional changed tables couldn't be rolled back	0.016 sec

