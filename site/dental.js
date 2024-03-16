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
		name: 'Норма',
		column: 'norm',
		width: '25%',
	},
	{
		name: 'Текущее состояние',
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
		console.log(column);
		const cell = document.createElement('div');
		cell.classList.add('dental-table-head-cell');
		cell.classList.add('font');
		cell.style.width = column.width;
		cell.innerText = column.name;

		tableHeadElement.appendChild(cell);
	}
});

