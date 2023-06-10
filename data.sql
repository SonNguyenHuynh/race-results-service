INSERT INTO public."PEOPLE" (id,country,team_id,date_of_birth,jod,name,place_of_birth,points,year_of_attendance) VALUES
	 ('1','US','0','1970','DRIVER','Max Verstappen','US',170,2023),
	 ('2','US','0','1970','DRIVER','Sergio Perez','US',170,2023),
	 ('3','US','0','1970','DRIVER','Fernando Alonso','US',170,2022),
	 ('4','US','3','1970','DRIVER','Lewis Hamilton','US',170,2020),
	 ('5','US','4','1970','DRIVER','George Russell','US',170,2020);

INSERT INTO public."RACE" (id,name,"year") VALUES
	 ('1','BAHRAIN',2023),
	 ('2','BAHRAIN',2022),
	 ('3','MIAMI',2023),
	 ('4','SPAN',2023),
	 ('7','HUNGARY',2023),
	 ('5','CANADA',2022),
	 ('6','AUTRIA',2021);


INSERT INTO public."RANK" (id,race_id,team_id,"rank") VALUES
	 ('1','1','1',1),
	 ('2','1','2',2),
	 ('3','1','3',3),
	 ('4','1','4',4),
	 ('5','1','5',5);

INSERT INTO public."TEAM" (id,name,base,first_team_entry,chassis,world_championships,power_unit,year_of_attendance) VALUES
	 ('1','RED BULL RACING HONDA RBPT','US',1,'EMPTY',1,'287',2023),
	 ('2','	MERCEDES','US',1,'EMPTY',1,'2',2023),
	 ('3','ASTON MARTIN ARAMCO MERCEDES','US',1,'EMPTY',1,'5',2023),
	 ('4','	FERRARI','US',1,'EMPTY',1,'7',2022),
	 ('5','	ALPINE RENAULT','US',1,'EMPTY',1,'8',2020);
