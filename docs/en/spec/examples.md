# Examples

The following sections provide examples of how TODS can represent specific use cases. The inclusion of these examples should not
be as an indication that this is the only way to represent these use cases with TODS. If you have questions about a use case not
represented here, please feel free to [create an issue in GitHub](https://github.com/cal-itp/operational-data-standard/issues/new).

## Single Run with Pull-Out and Lunch Break

In this example, a bus driver is assigned to run 10000, which has four revenue trips on two pieces, all on the same block. The run also includes a pull-out, a pull-back, a pre-trip inspection, and a lunch break between the two pieces.

![Diagram showing four trips, two deadheads, and other events.](examples/single-run-diagram.png)

### GTFS Files

These are the same files that would be published in the agency's public GTFS file, and contains only revenue trips and public information.

Some irrelevant files are ommitted for brevity.

#### `stops.txt`

```csv
stop_id,location_type
stop-1,0
stop-2,0
stop-3,0
```

#### `routes.txt`

```csv
route_id,route_short_name,route_type
12,12,3
```

#### `trips.txt`

```csv
route_id,service_id,trip_id,trip_headsign,direction_id,block_id
12,daily,101,North,0,BLOCK-A
12,daily,102,South,1,BLOCK-A
12,daily,103,North,0,BLOCK-A
12,daily,104,South,1,BLOCK-A
```

#### `stop_times.txt`

```csv
trip_id,arrival_time,stop_id,stop_sequence
101,10:00,stop-1,1
101,10:25,stop-2,2
101,10:50,stop-3,3
102,11:00,stop-3,1
102,11:25,stop-2,2
102,11:50,stop-1,3
103,13:00,stop-1,1
103,13:25,stop-2,2
103,13:50,stop-3,3
104,14:00,stop-3,1
104,14:25,stop-2,2
104,14:50,stop-1,3
```

### TODS Files

These are the new files that are published in TODS. In this example, the TODS files do not delete or modify any rows that were published in GTFS.

#### `stops_supplement.txt`

```csv
stop_id,location_type,TODS_location_type
garage,0,garage
garage-waypoint,0,
```

#### `routes_supplement.txt`

```csv
route_id,route_long_name
deadheads,Deadheads
```

In this example, the agency puts all of its deadheads on this new route, though agencies may have other ways to assign deadheads to routes.

#### `trips_supplement.txt`

```csv
route_id,service_id,trip_id,block_id,TODS_trip_type
deadheads,daily,deadhead-1,BLOCK-A,pull-out
deadheads,daily,deadhead-2,BLOCK-A,pull-back
```

In this example, consumers know that these trips aren't in revenue service because of the `route_id` and `TODS_trip_type`.

#### `stop_times_supplement.txt`

```csv
trip_id,arrival_time,stop_id,stop_sequence
deadhead-1,09:45:00,garage,1
deadhead-1,09:50:00,garage-waypoint,2
deadhead-1,09:55:00,stop-1,3
deadhead-2,14:50:00,stop-1,1
deadhead-2,14:55:00,garage-waypoint,2
deadhead-2,15:00:00,garage,3
```

#### `run_events.txt`

```csv
service_id,run_id,event_sequence,piece_id,block_id,job_type,event_type,trip_id,start_location,start_time,start_mid_trip,end_location,end_time,end_mid_trip
daily,10000,10,       ,       ,Operator,Report Time,        ,garage,09:30:00,,garage,09:30:00,
daily,10000,20,       ,       ,Operator,Pre-Trip Inspection,,garage,09:35:00,,garage,09:45:00,
daily,10000,30,10000-1,BLOCK-A,Operator,Pull-Out,deadhead-1 ,garage,09:45:00,2,stop-1,09:55:00,2
daily,10000,40,10000-1,BLOCK-A,Operator,Operator,101        ,stop-1,10:00:00,2,stop-3,10:50:00,2
daily,10000,50,10000-1,BLOCK-A,Operator,Operator,102        ,stop-3,11:00:00,2,stop-1,11:50:00,2
daily,10000,60,       ,       ,Operator,Break,              ,stop-1,11:50:00,,stop-1,13:00:00,
daily,10000,70,10000-2,BLOCK-A,Operator,Operator,103        ,stop-1,13:00:00,2,stop-3,13:50:00,2
daily,10000,80,10000-2,BLOCK-A,Operator,Operator,104        ,stop-3,14:00:00,2,stop-1,14:50:00,2
daily,10000,90,10000-2,BLOCK-A,Operator,Pull-Back,deadhead-2,stop-1,14:50:00,2,garage,15:00:00,2
```

## Multiple Runs on a Single Block with Mid-Trip Relief

In this example, the bus driver assigned to run 10000 pulls out a bus, does trip 101 and part of trip 102, and then ends their day at `stop-2`. A new driver on run 20000 boards the bus, completes trip 102, then does trip 103 and trip 104, and pulls back to the garage.

![Diagram showing four trips, with the second trip broken into two different assignments.](examples/mid-trip-relief-diagram.png)

This example uses the [exact same GTFS files as the previous example](#gtfs-files). Deadheads and nonrevenue locations are omitted in order to focus on the revenue trip assignments, so no `_supplement.txt` files are needed for this example. Only `run_events.txt` needs to change to reflect the multiple runs and mid-trip relief.

### `run_events.txt`

```csv
service_id,run_id,event_sequence,piece_id,block_id,job_type,event_type,trip_id,start_location,start_time,start_mid_trip,end_location,end_time,end_mid_trip
daily,10000,10,10000-1,BLOCK-A,Operator,Operator,101,stop-1,10:00:00,2,stop-3,10:50:00,2
daily,10000,20,10000-1,BLOCK-A,Operator,Operator,102,stop-3,11:00:00,2,stop-2,11:25:00,1
daily,20000,10,20000-1,BLOCK-A,Operator,Operator,102,stop-2,11:25:00,1,stop-1,11:50:00,2
daily,20000,20,20000-1,BLOCK-A,Operator,Operator,103,stop-1,13:00:00,2,stop-3,13:50:00,2
daily,20000,30,20000-1,BLOCK-A,Operator,Operator,104,stop-3,14:00:00,2,stop-1,14:50:00,2
```

## Multiple operators on the same trip

In this example (unrelated to the previous examples), a two-car train does a round trip, and requires two operators, one in the first car and one in the second car. The `event_type` field distinguishes whether an operator is in the front car or the rear car. The operators swap for the return trip.

### `run_events.txt`

```csv
service_id,run_id,event_sequence,job_type,event_type,trip_id,start_location,start_time,end_location,end_time
weekday,10000,10,Operator,Operate 1st Car,trip-1,stop-1,10:00:00,stop-2,10:58:00
weekday,10000,20,Operator,Operate 2nd Car,trip-2,stop-2,11:00:00,stop-1,11:58:00
weekday,20000,10,Operator,Operate 2nd Car,trip-1,stop-1,10:00:00,stop-2,10:58:00
weekday,20000,20,Operator,Operate 1st Car,trip-2,stop-2,11:00:00,stop-1,11:58:00
```

## Run as Directed work

In this example (unrelated to the previous examples), an operator signs in for their shift, pulls out, and then operates a bus for several hours. They are not scheduled to do specific trips, but instead do trips as directed to by dispatch. This approach could apply in several situations:

- An agency uses `frequencies.txt` (`frequencies.trip_id` may be able to be referenced in `run_events.trip_id`).
- An agency publishes specific times in GTFS `trips.txt`, but in practice operates the service according to a headway, or doesn't schedule operators to specific trips.
- The operator is assigned to cover or strategic work, and is positioned somewhere where they can cover absences or gaps in service on any route throughout the day.

### `run_events.txt`

```csv
service_id,run_id,event_sequence,block_id,event_type,trip_id,start_location,start_time,end_location,end_time
weekday,10000,10,       ,sign-in        ,,garage,08:45:00,garage,08:50:00
weekday,10000,20,BLOCK-A,deadhead       ,,garage,08:50:00,stop-1,09:00:00
weekday,10000,30,BLOCK-A,run-as-directed,,stop-1,09:00:00,stop-1,12:00:00
weekday,10000,30,BLOCK-A,deadhead       ,,stop-1,12:00:00,garage,12:10:00
```

## Jobs of entirely nonrevenue operations

A track inspection train operates once per week, with a separate crew. It's scheduled and operated separately from other service, so is given its own service ID separate from any trips in the public GTFS file. In this example, the route and stops are assumed to be defined in the public GTFS.

### `calendar_supplement.txt`

```csv
service_id,monday,tuesday,wednesday,thursday,friday,saturday,sunday,start_date,end_date
inspection_train,0,0,0,0,0,0,1,20240601,20241231
```

### `trips_supplement.txt`

```csv
route_id,service_id,trip_id,TODS_trip_type,direction_id
line1,inspection_train,inspection_line1_ob,deadhead,0
line1,inspection_train,inspection_line1_ib,deadhead,1
```

### `stop_times_supplement.txt`

```csv
trip_id,stop_id,arrival_time
inspection_line1_ob,downtown,01:00:00
inspection_line1_ob,anytown,01:45:00
inspection_line1_ib,anytown,02:00:00
inspection_line1_ib,downtown,02:45:00
```

### `run_events.txt`

This file references the service ID and trip ID defined in the other supplement files.

```csv
service_id,run_id,event_sequence,event_type,trip_id,start_location,start_time,end_location,end_time
inspection_train ,1 ,1 ,sign-in  ,                    ,main_terminal ,00:45:00 ,main_terminal ,00:45:00
inspection_train ,1 ,2 ,operator ,inspection_line1_ob ,downtown      ,01:00:00 ,anytown       ,01:45:00
inspection_train ,1 ,3 ,operator ,inspection_line1_ib ,anytown       ,02:00:00 ,downtown      ,02:45:00
inspection_train ,1 ,4 ,sign-off ,                    ,main_terminal ,03:00:00 ,main_terminal ,03:00:00
```

## Distinct Crew and Trip schedule scenarios

These examples show situations where the crew schedules in `run_events.txt` use different service IDs than the trips they work on, as is allowed by [the spec](/spec#service_id-crew-schedules-and-trip-schedules). Most agencies will not need to model a situation like this.

In all these cases, the trips and service IDs in the public GTFS file are not modified. New service IDs are created in the calendar supplement files, and runs that operate on those dates are described in `run_events.txt`.

### Extra staffing for a special event

Due to a baseball game, an additional ticket collector will be assigned to supplement the existing crew on train 101, serving the ballpark.

#### `calendar.txt`

```csv
service_id,monday,tuesday,wednesday,thursday,friday,saturday,sunday,start_date,end_date
weekday,1,1,1,1,1,0,0,20240101,20241231
```

#### `trips.txt`

```csv
route_id,service_id,trip_id,block_id
route,weekday,101,BLOCK-A
```

#### `calendar_dates_supplement.txt`

```csv
service_id,date,exception_type
gameday,20240820,1
gameday,20240821,1
gameday,20240827,1
gameday,20240903,1
```

#### `run_events.txt`

```csv
service_id,run_id,event_sequence,block_id,job_type,event_type,trip_id,start_location,start_time,end_location,end_time
weekday,1,1,       ,collector,sign-in        ,   ,main_terminal,14:00:00,main_terminal,14:15:00
weekday,1,2,BLOCK-A,collector,collector      ,101,main_terminal,14:45:00,ballpark     ,15:30:00
gameday,2,1,       ,collector,sign-in        ,   ,main_terminal,14:00:00,main_terminal,14:15:00
gameday,2,2,BLOCK-A,collector,extra collector,101,main_terminal,14:45:00,ballpark     ,15:30:00
```

### Trip worked by different runs on different dates

Consider a bus network between West City, Eastland, and Northingdon. Route 1 runs between West City and Eastland via Northingdon, whereas Route 2 runs directly between the two cities.

To lengthen a short layover and improve on-time performance, the driver working the 10:45am Route 1 departure and the driver of the 11am Route 2 departure will exchange these trips effective September 2024.

The public-facing schedule will not change. The trips remain on the service `weekday`. The runs are scheduled on new services `summer` and `fall`, which together cover all of the dates in `weekday`.

![Diagram showing four trips on two runs, with the assignments rearranged in the fall.](examples/different-runs-same-trips.png)

#### `calendar.txt`

```csv
service_id,monday,tuesday,wednesday,thursday,friday,saturday,sunday,start_date,end_date
weekday,1,1,1,1,1,0,0,20240601,20241231
```

#### `trips.txt`

```csv
route_id,service_id,trip_id,trip_headsign,direction_id
1,weekday,101,Eastland via Northingdon,1
2,weekday,201,Eastland,1
1,weekday,102,West City via Northingdon,0
2,weekday,202,West City,0
```

#### `calendar_supplement.txt`

To detail the presence of the new `service_id`s and assign them to their applicable days of the week, the runs can be added to the calendar via `calendar_supplement.txt`:

```csv
service_id,monday,tuesday,wednesday,thursday,friday,saturday,sunday,start_date,end_date
summer,1,1,1,1,1,0,0,20240601,20240831
fall  ,1,1,1,1,1,0,0,20240901,20241231
```

#### `run_events.txt`

The current runs can be modeled with service_id `summer`, and mapped to the existing `weekday` trips. The future runs can be modeled with service_id `fall`, also mapped to the existing `weekday` trips. The service_id `weekday` is already defined in `calendar.txt`, but neither `summer` nor `fall` are.

```csv
service_id ,run_id ,event_sequence ,block_id ,event_type ,trip_id ,start_location ,start_time ,end_location ,end_time
summer ,1 ,20 ,A ,drive ,101 ,westcity ,09:00:00 ,eastland ,10:30:00
summer ,1 ,30 ,A ,drive ,102 ,eastland ,10:45:00 ,westcity ,12:15:00

summer ,2 ,20 ,B ,drive ,201 ,westcity ,09:00:00 ,eastland ,10:00:00
summer ,2 ,30 ,B ,drive ,202 ,eastland ,11:00:00 ,westcity ,12:00:00

fall   ,1 ,20 ,A ,drive ,101 ,westcity ,09:00:00 ,eastland ,10:30:00
fall   ,1 ,30 ,A ,drive ,202 ,eastland ,11:00:00 ,westcity ,12:00:00

fall   ,2 ,20 ,B ,drive ,201 ,westcity ,09:00:00 ,eastland ,10:00:00
fall   ,2 ,30 ,B ,drive ,102 ,eastland ,10:45:00 ,westcity ,12:15:00
```

(In this example, block IDs are listed in `run_events.txt` but not `trips.txt` because the blocks would also change with the schedule change.)

## Employee Assignments

This example uses [`employee_run_dates.txt`](/spec#employee_run_datestxt) to assign employees to runs (and trips).

In this example, `A` and `B` work Monday-Wednesday and Sunday. `C` and `D` work Thursday-Saturday.

On Wedneday, July 3, `A` has scheduled vacation, so a substitute is assigned instead.

**[`calendar.txt`](https://gtfs.org/documentation/schedule/reference/#calendartxt)**

```csv
service_id,monday,tuesday,wednesday,thursday,friday,saturday,sunday,start_date,end_date
weekday,1,1,1,1,1,0,0,20240701,20240707
weekend,0,0,0,0,0,1,1,20240701,20240707
```

July 1, 2024 was a Monday.

**[`run_events.txt`](/spec#run_eventstxt)**

For this example, the purpose of this file is just to show which runs exist. Real runs would have more interesting data.

```csv
service_id,run_id,event_sequence,event_type,trip_id,start_location,start_time,end_location,end_time
weekday,101,1,work,trip1,station,09:00:00,station,17:00:00
weekday,102,1,work,trip2,station,09:00:00,station,17:00:00
weekend,103,1,work,trip3,station,09:00:00,station,17:00:00
weekend,104,1,work,trip4,station,09:00:00,station,17:00:00
```

**[`employee_run_dates.txt`](/spec#employee_run_datestxt)**

```csv
date,service_id,run_id,employee_id
20240701,weekday,101,A
20240701,weekday,102,B
20240702,weekday,101,A
20240702,weekday,102,B
20240703,weekday,101,A
20240703,weekday,102,B
20240704,weekday,101,C
20240704,weekday,102,D
20240705,weekday,101,C
20240705,weekday,102,D
20240706,weekend,103,C
20240706,weekend,104,D
20240707,weekend,103,A
20240707,weekend,104,B
```
