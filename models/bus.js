class Bus {
    constructor(id, mode, line, direction, operator, date, expected_departure_date,
         aimed_departure_time, expected_departure_time, best_departure_estimate,
        source, operator_name){
            this.id = id;
            this.mode = mode;
            this.line = line; 
            this.direction = direction;
            this.operator = operator;
            this.date = date;
            this.expected_departure_date = expected_departure_date;
            this.aimed_departure_time = aimed_departure_time;
            this.expected_departure_time = expected_departure_time;
            this.best_departure_estimate = best_departure_estimate;
            this.source = source;
            this.operator_name = operator_name;
            
        }
    }

export default Bus;