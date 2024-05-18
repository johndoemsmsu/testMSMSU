const legend = [
	{
		name: 'Высокий риск',
		color: '#D25653',
		type: 'high'
	},
	{
		name: 'Средний риск',
		color: '#E9A53D',
		type: 'middle'
	},
	{
		name: 'Низкий риск',
		color: '#5EC13C',
		type: 'low'
	},
	{
		name: 'Норма',
		color: '#6F6F6F',
		type: 'norm'
	},
	{
		name: 'Текущее состояние',
		color: '#3A9DBB',
		type: 'current'
	}
];

const tableColumns = [
	{
		name: 'Показатель',
		column: 'name',
		width: '40%'
	},
	{
		name: legend[3].name,
		column: 'norm',
		width: '25%',
	},
	{
		name: legend[4].name,
		column: 'current',
		width: '35%'
	}
];

const tableRows = [
	{
		current: 5,
		name: 'Индекс КПУ',
		norm: 0.5
	},
	{
		current: 1,
		name: 'Индекс гингивита GI',
		norm: 1
	},
	{
		current: 2,
		name: 'Индекс гигиены',
		norm: 0.6
	},
	{
		current: 2,
		name: 'Streptococcus mutants',
		norm: 0.5
	},
	{
		current: 2,
		name: 'ИУМ',
		norm: 1
	},
	{
		current: 1,
		name: 'ТЭР-тест',
		norm: 2
	},
	{
		current: 2,
		name: 'КОСРЭ-тест',
		norm: 1.5
	},
	{
		current: 2,
		name: 'Вязкость слюны',
		norm: 2
	},
	{
		current: 0.5,
		name: 'Содержание фтора в воде',
		norm: 0.6
	}
];

document.addEventListener("DOMContentLoaded", () => {
	const legendElement = document.querySelector('.dental-legend');
	for (item of legend) {
		const parent = document.createElement('div');
		parent.classList.add('dental-legend-row');

		const box = document.createElement('div');
		box.classList.add('dental-legend-row-box');
		box.style.background = item.color;
		parent.appendChild(box);

		const label = document.createElement('div');
		label.classList.add('font');
		label.classList.add('dental-legend-row-label');
		label.innerText = item.name;
		parent.appendChild(label);


		legendElement.appendChild(parent);
	}

	const tableHeadElement = document.querySelector('.dental-table-head');
	for (column of tableColumns) {
		const cell = document.createElement('div');
		cell.classList.add('dental-table-head-cell');
		cell.classList.add('font');
		cell.style.width = column.width;
		cell.innerText = column.name;

		tableHeadElement.appendChild(cell);
	}

	const tableDental = document.querySelector('.dental-table');
	for (row of tableRows) {
		const rowElement = document.createElement('div');
		rowElement.classList.add('dental-table-row');

		for (col of tableColumns) {
			const cell = document.createElement('div');
			cell.classList.add('dental-table-row-cell');
			cell.classList.add('font');
			cell.style.width = col.width;
			if (col.column === 'current') {
				const input = document.createElement('input');
				input.value = row[col.column];
				input.type = 'number';
				input.min = 0;
				input.classList.add('dental-table-row-cell-input');
				input.classList.add('font');
				cell.appendChild(input);
			} else {
				cell.innerText = row[col.column];
			}
			rowElement.appendChild(cell);
		}

		tableDental.appendChild(rowElement);
	}

	const chartWrapper = document.querySelector('.dental-chart-wrapper');

	const categories = [];
	const norms = [];
	const currents = [];
	for (row of tableRows) {
		categories.push(row.name);
		norms.push(row.norm);
		currents.push(row.current);
	}

	
	const chart = Highcharts.chart(chartWrapper, {
		chart: {
			type: 'column'
		},
		title: {
			text: '',
		},
		xAxis: {
			categories: categories,
			crosshair: true,
		},
		yAxis: {
			min: 0,
			title: {
				text: ''
			}
		},
		plotOptions: {
			column: {
				pointPadding: 0,
				borderWidth: 0
			}
		},
		series: [
			{
				name: legend[0].name,
				data: [6, 4, 2, 6, 7, 2, 5, 3, 8],
				color: legend[0].color,
				type: 'line'
			},
			{
				name: legend[1].name,
				data: [3, 2, 3, 1, 0, 1, 2, 1, 4],
				color: legend[1].color,
				type: 'area'
			},
			{
				name: legend[2].name,
				data: [5, 3, 4, 3, 1, 2, 4, 2, 5],
				color: legend[2].color,
				type: 'area'
			},
			{
				name: legend[3].name,
				data: norms,
				color: legend[3].color,
				type: 'column'
			},
			{
				name: legend[4].name,
				data: currents,
				color: legend[4].color,
				type: 'column'
			}
		]
	});

	const inputs = document.querySelectorAll('.dental-table-row-cell-input');

	const redrawChart = () => {
		const values = [];
		for (input of inputs) {
			values.push(+input.value);
		}
		chart.series[4].setData(values);
	}

	for (input of inputs) {
		input.addEventListener('change', redrawChart)
	}

});