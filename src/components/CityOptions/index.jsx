import React from "react";
import { useState } from "react";

const CityOptions = () => {
    const [cities, setCities] = useState('');

    fetch('https://apps.kodim.cz/daweb/leviexpress/api/cities')
    .then(response => response.json())
    .then(data => setCities(data));
}

export default CityOptions;