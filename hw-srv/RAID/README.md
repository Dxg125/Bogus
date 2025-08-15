HR = Human Resource

Raid Controller ist eine Serverkomponente, welche erlaubt Festplatten zu verwalten, also eine Logical Unit

Der Raid Controller auch benötigt ein "BIOS"

DG = Diskgroup also ein Array, es sind auch mehrere möglich

Diskgroups können zu einem RAID zusammengefasst werden

RAID 1 = 1 Mirror also 2 Platten gespiegelt
RAID 5 = Mindestens 3 Festplatten, wird alles auf jede Festplatte gespeichert
RAID 6 = 6 Es dürfen 2 Festplatten defekt gehen

Global Hot Spare = 3 HDD in einem RAID5, die GH ist hier die 4-te Festplatte
WARNUNG: nicht jeder RAID-Controller unterstützt HOT SPARE Software-Controller können kein Hot Spare

Software, Hardware - & Onboard-Controller habe ALLE die gleiche Funktion, sind aber jeweils einzeln verbaut
Es gibt auch lizensierte RAID-Controller

RAID-Controller, haben nur Interne Anschlüsse, RAID-Expander haben externe Anschlüsse, es gibt auch Kombinationen

JEDER RAID-CONTROLLER braucht: ein Cache-Battery, Cache-Module, sowie eine Verwaltungssoftware
Cache-Module sind mit "RAM" zu vergleichen
Auch SSD's können als Cache-Module verwendet werden, weil die SSD auch RAM ist

Cache Battery, ist eine Absicherung für das Cache-Module, weil RAM einen Datenverlust durch fehlenden Strom haben könnte, also ungeplantes herunterfahren. Und sie haben eine bestimmte Laufzeit, solche welche sich selber laden gibt es auch.

Die andere Batterie auf dem Motherboard heisst "CMOS"-Batterie.

Fibre Channel, ist der SFP-Anschluss, hat PCI
Netzwerkkarten / Grafikkarten haben PCI

###########################################################################################

Nexenta vo SuperMicro

Ist ein RAID-Controller ohne Hardware also nur Software
Kann RAID, Libarys und auch beliebig viele HOT-SPARES ig meine geil

###########################################################################################

Die Richtige Konfiguration:

Einen Server mit 12xHDD

Eine kleine Gruppe RAID 1 mit 2xHDD
Darauf kommt das Operating System

Ein RAID 6 mit 9xHDD

Eine HDD als Globale HOT SPARE, dieser kann in beiden RAIDS eingreifen, falls eine HDD defekt wäre
