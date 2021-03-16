CREATE TABLE Test (
  TestID int(10) NOT NULL CHECK(Primary Key), 
  TestName varchar(255), 
  StartDate date, 
  StartTime time, 
  EndDate date, 
  EndTime time, 
  CONSTRAINT TestID PRIMARY KEY (TestID)
);
CREATE TABLE TestResults (
  TestResultsID int(10) NOT NULL AUTO_INCREMENT, 
  TestID int(10) NOT NULL, 
  TotalPacketsSent int(10), 
  TotalPacketsReceived int(10), 
  PRIMARY KEY (TestResultsID), 
  UNIQUE INDEX (TestResultsID)
);
CREATE TABLE ThroughputData (
  ThroughputDataID int(10) NOT NULL AUTO_INCREMENT, 
  TestResultsID int(10) NOT NULL, 
  ThroughputMbps int(10), 
  TotalPackets int(10), 
  PacketsPerSec int(10), 
  PacketsLost int(10), 
  PRIMARY KEY (ThroughputDataID), 
  UNIQUE INDEX (ThroughputDataID), 
  INDEX (TestResultsID)
);
CREATE TABLE PacketData (
  PacketDataID int(10) NOT NULL AUTO_INCREMENT, 
  TestResultsID int(10) NOT NULL, 
  OneWayLatencyUs int(10), 
  PRIMARY KEY (PacketDataID), 
  UNIQUE INDEX (PacketDataID), 
  INDEX (TestResultsID)
);
CREATE TABLE Participant (
  ParticipantID int(10) NOT NULL AUTO_INCREMENT, 
  TestID int(10) NOT NULL, 
  ParticipantType varchar(255), 
  PRIMARY KEY (ParticipantID), 
  UNIQUE INDEX (ParticipantID), 
  INDEX (TestID)
);
CREATE TABLE ParticipantConfiguration (
  ParticipantConfigurationID int(10) NOT NULL AUTO_INCREMENT, 
  ParticipantID int(10) NOT NULL, 
  ConfigurationID int(10) NOT NULL, 
  PRIMARY KEY (ParticipantConfigurationID), 
  UNIQUE INDEX (ParticipantConfigurationID), 
  UNIQUE INDEX (ParticipantID), 
  UNIQUE INDEX (ConfigurationID)
);
CREATE TABLE Configuration (
  ConfigurationID int(10) NOT NULL AUTO_INCREMENT, 
  PRIMARY KEY (ConfigurationID), 
  UNIQUE INDEX (ConfigurationID)
);
CREATE TABLE QoSSetting (
  QoSID int(10) NOT NULL AUTO_INCREMENT, 
  ConfigurationID int(10) NOT NULL, 
  Parameter varchar(255), 
  IntValue int(10), 
  BoolValue varchar(255), 
  StringValue varchar(255), 
  PRIMARY KEY (QoSID), 
  UNIQUE INDEX (QoSID), 
  INDEX (ConfigurationID)
);
CREATE TABLE GeneralSetting (
  GeneralSettingID int(10) NOT NULL AUTO_INCREMENT, 
  ConfigurationID int(10) NOT NULL, 
  Parameter varchar(255), 
  IntValue int(10), 
  BoolValue varchar(255), 
  StringValue varchar(255), 
  PRIMARY KEY (GeneralSettingID), 
  UNIQUE INDEX (GeneralSettingID), 
  INDEX (ConfigurationID)
);
CREATE TABLE Repetition (
  RepetitionID int(10) NOT NULL AUTO_INCREMENT, 
  TestID int(10) NOT NULL, 
  PRIMARY KEY (RepetitionID), 
  UNIQUE INDEX (RepetitionID), 
  INDEX (TestID)
);
ALTER TABLE 
  TestResults 
ADD 
  CONSTRAINT FKTestResult187851 FOREIGN KEY (TestID) REFERENCES Test (TestID);
ALTER TABLE 
  ThroughputData 
ADD 
  CONSTRAINT FKThroughput642069 FOREIGN KEY (TestResultsID) REFERENCES TestResults (TestResultsID);
ALTER TABLE 
  PacketData 
ADD 
  CONSTRAINT FKPacketData548807 FOREIGN KEY (TestResultsID) REFERENCES TestResults (TestResultsID);
ALTER TABLE 
  Participant 
ADD 
  CONSTRAINT FKParticipan713501 FOREIGN KEY (TestID) REFERENCES Test (TestID);
ALTER TABLE 
  ParticipantConfiguration 
ADD 
  CONSTRAINT FKParticipan732613 FOREIGN KEY (ParticipantID) REFERENCES Participant (ParticipantID);
ALTER TABLE 
  ParticipantConfiguration 
ADD 
  CONSTRAINT FKParticipan223509 FOREIGN KEY (ConfigurationID) REFERENCES Configuration (ConfigurationID);
ALTER TABLE 
  QoSSetting 
ADD 
  CONSTRAINT FKQoSSetting833317 FOREIGN KEY (ConfigurationID) REFERENCES Configuration (ConfigurationID);
ALTER TABLE 
  GeneralSetting 
ADD 
  CONSTRAINT FKGeneralSet124125 FOREIGN KEY (ConfigurationID) REFERENCES Configuration (ConfigurationID);
ALTER TABLE 
  Repetition 
ADD 
  CONSTRAINT FKRepetition783492 FOREIGN KEY (TestID) REFERENCES Test (TestID);
