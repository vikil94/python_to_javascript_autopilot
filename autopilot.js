    function getNewCar() {
        return {
            'city': 'Toronto',
            'passengers': 0,
            'gas': 100,
        }
    }

    function addCar(cars, newCar) {
        cars.push(newCar);
        return `Adding new car to fleet. Fleet size is now ${cars.length}.`
    }

    function pickUpPassenger(car) {
        car['passengers'] += 1;
        car['gas'] -= 10;
        return `Picked up passenger. Car now has ${car['passengers']} passengers.`
    }


    function getDestination(car) {
        if (car['city'] == 'Toronto') {
            return 'Mississauga';
        } else if (car['city'] == 'Mississauga') {
            return 'London';
        } else if (car['city'] == 'London') {
            return 'Toronto';
        }
    }

    function fillUpGas(car) {
        var oldGas = car['gas'];
        car['gas'] = 100;
        return `Filled up to ${getGasDisplay(car['gas'])} on gas from ${getGasDisplay(old_gas)}.`
    }

    function getGasDisplay(gasAmount) {
        return gasAmount + "%";
    }

    function drive(car, cityDistance) {
        if (car['gas'] < cityDistance) {
            return fillUpGas(car);
        }

        car['city'] = getDestination(car);
        car['gas'] -= cityDistance;
        return `Drove to ${car['city']}. Remaining gas: ${getGasDisplay(car['gas'])}.`
    }

    function dropOffPassengers(car) {
        const previousPassengers = car['passengers'];
        car['passengers'] = 0;
        return "Dropped off " + previousPassengers + " passengers."
    }

    function act(car) {
        distanceBetweenCities = 50;

        if (car['gas'] < 20) {
            return fillUpGas(car);
        } else if (car['passengers'] < 3) {
            return pickUpPassenger(car);
        } else {
            if (car['gas'] < distanceBetweenCities) {
                return fillUpGas(car);
            }
            droveTo = drive(car, distanceBetweenCities);
            passengersDropped = dropOffPassengers(car);
            return `${droveTo} ${passengersDropped}`
        }
    }

    function commandFleet(cars) {
        let i = 1;
        for (car = 0; car < cars.length; cars++) {
            var action = act(car);
            console.log("Car " + i + ": " + action);
            i += 1;
        }
        console.log('---');
    }

    function addOneCarPerDay(cars, numDays) {
        for (day = 0; day < numDays; day++) {
            var newCar = getNewCar();
            console.log(addCar(cars, newCar));
            commandFleet(cars);

        }
    }

    let cars = []
    addOneCarPerDay(cars, 10);