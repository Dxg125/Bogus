   SET SESSION group_concat_max_len = 1000000;	Nur für Session
   SET @@group_concat_max_len       = 1000000;	Sollte bestehen bleiben (Schema)
   SET GLOBAL group_concat_max_len  = 1000000;	Global, benötigt SUPER
   SET @@group_concat_max_len = 1024;	Reset auf defaiöt
  SELECT @@group_concat_max_len;	Abfrage des werts
