let column = 10, row = 10, color = "#000000";

$(function() {
    for (let i = 1; i <= row; i++) {
        addCells(i);
    }
});

function colorize(rowNumber, columnNumber) {
    $(`#grid-col-${rowNumber}-${columnNumber}`).css("background-color", color);
}

function change() {
    color = $("#color").val();
    resize(row, column);
}

function resize(oldRow, oldColumn) {
    column = Number($("#column").val());
    row = Number($("#row").val());

    if (column < 3 || column > 101 || row < 3 || row > 101) {
        console.log(`column is ${column}, row is ${row}`);
        let modalAhem = new bootstrap.Modal($("#modal-ahem"));
        modalAhem.show();
    } else {
        console.log(`column is ${column}, row is ${row}`);
        if (column < oldColumn) {
            for (let i = 1; i <= oldRow; i++) {
                for (let j = column + 1; j <= oldColumn; j++) {
                    $(`#grid-col-${i}-${j}`).remove();
                }
            }
        }
        if (row < oldRow) {
            for (let i = row + 1; i <= oldRow; i++) {
                $(`#grid-row-${i}`).remove();
            }
        }
        if (column > oldColumn) {
            for (let i = 1; i <= oldRow; i++) {
                for (let j = oldColumn + 1; j <= column; j++) {
                    let newColumn = `<td id="grid-col-${i}-${j}" onclick="colorize(${i}, ${j})"></td>`;
                    $(`#grid-row-${i}`).append(newColumn);
                }
            }
        }
        if (row > oldRow) {
            for (let i = oldRow + 1; i <= row; i++) {
                addCells(i);
            }
        }
    }
}

function addCells(i) {
    let newRow = `<tr id="grid-row-${i}"></tr>`;
    $("#table-grid").append(newRow);
    for (let j = 1; j <= column; j++) {
        let newColumn = `<td id="grid-col-${i}-${j}" onclick="colorize(${i}, ${j})"></td>`;
        $(`#grid-row-${i}`).append(newColumn);
    }
}

function reset() {
    for (let i = 1; i <= row; i++) {
        for (let j = 1; j <= column; j++) {
            $(`#grid-col-${i}-${j}`).css("background-color", "#ffffff");
        }
    }
}