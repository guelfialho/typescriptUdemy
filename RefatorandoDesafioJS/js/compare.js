"use strict";
//car
let carArr = [];
class Car {
    nome;
    preco;
    alturaCacamba;
    alturaVeiculo;
    alturaSolo;
    capacidadeCarga;
    motor;
    potencia;
    volumeCacamba;
    roda;
    image;
    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image) {
        this.nome = nome;
        this.preco = preco;
        this.alturaCacamba = alturaCacamba;
        this.alturaVeiculo = alturaVeiculo;
        this.alturaSolo = alturaSolo;
        this.capacidadeCarga = capacidadeCarga;
        this.motor = motor;
        this.potencia = potencia;
        this.volumeCacamba = volumeCacamba;
        this.roda = roda;
        this.image = image;
    }
}
// search on array if exist carClass returning 1 if not return -1
function SetCarToCompare(el, carClass) {
    if (carClass instanceof Car) {
        if (el.checked) {
            if (carArr.length < 1) {
                carArr[0] = carClass;
                el.classList.add('primeiro-carro');
            }
            else if (carArr.length > 0 && carArr.length < 2) {
                const verificar1 = document.querySelector('.primeiro-carro');
                const verificar = document.querySelector('.segundo-carro');
                if (verificar == undefined) {
                    carArr[1] = carClass;
                    el.classList.add('segundo-carro');
                }
                else if (verificar1 == undefined) {
                    carArr[1] = carClass;
                    el.classList.add('primeiro-carro');
                }
                else {
                    el.checked = false;
                }
            }
            else {
                el.checked = false;
            }
        }
        else {
            if (el.classList.contains('primeiro-carro')) {
                carArr.splice(0, 1);
                el.classList.remove('primeiro-carro');
            }
            else if (el.classList.contains('segundo-carro')) {
                carArr.splice(1, 1);
                el.classList.remove('segundo-carro');
            }
        }
    }
    else {
        throw 'You need set a Car Class';
    }
}
function ShowCompare() {
    const compare = document.getElementById('compare');
    if (carArr.length < 2) {
        alert('Precisa marcar 2 carros para apresentar a comparação');
        return;
    }
    UpdateCompareTable();
    if (compare) {
        compare.style.display = 'block';
    }
}
function HideCompare() {
    const compare = document.getElementById('compare');
    if (compare) {
        compare.style.display = 'none';
    }
    removeData();
}
function UpdateCompareTable() {
    for (let i = 0; i < 2; i++) {
        const modelo = document.getElementById('compare_modelo_' + i);
        const preco = document.getElementById('compare_preco_' + i);
        const alturaCacamba = document.getElementById('compare_alturacacamba_' + i);
        const alturaVeiculo = document.getElementById('compare_alturaveiculo_' + i);
        const alturaSolo = document.getElementById('compare_alturasolo_' + i);
        const capacidadeCarga = document.getElementById('compare_capacidadecarga_' + i);
        const motor = document.getElementById('compare_motor_' + i);
        const potencia = document.getElementById('compare_potencia_' + i);
        const volumeCacamba = document.getElementById('compare_volumecacamba_' + i);
        const roda = document.getElementById('compare_roda_' + i);
        const image = document.getElementById('compare_image_' + i);
        if (modelo) {
            modelo.textContent = carArr[i].nome;
        }
        if (preco) {
            preco.textContent = carArr[i].preco;
        }
        if (alturaCacamba) {
            alturaCacamba.textContent = carArr[i].alturaCacamba;
        }
        if (alturaVeiculo) {
            alturaVeiculo.textContent = carArr[i].alturaVeiculo;
        }
        if (alturaSolo) {
            alturaSolo.textContent = carArr[i].alturaSolo;
        }
        if (capacidadeCarga) {
            capacidadeCarga.textContent = carArr[i].capacidadeCarga;
        }
        if (motor) {
            motor.textContent = carArr[i].motor;
        }
        if (potencia) {
            potencia.textContent = carArr[i].potencia;
        }
        if (volumeCacamba) {
            volumeCacamba.textContent = carArr[i].volumeCacamba;
        }
        if (roda) {
            roda.textContent = carArr[i].roda;
        }
        if (image) {
            image.innerHTML = insertImage(i);
        }
    }
}
function uncheckAll() {
    const c1 = document.getElementById('c1');
    const c2 = document.getElementById('c2');
    const c3 = document.getElementById('c3');
    console.log(typeof c1);
    c1.checked = false;
    c2.checked = false;
    c3.checked = false;
}
function removeData() {
    uncheckAll();
    carArr.splice(1, 1);
    carArr.splice(0, 1);
    const car1 = document.querySelector('.primeiro-carro');
    if (car1) {
        car1.classList.remove('primeiro-carro');
    }
    const car2 = document.querySelector('.segundo-carro');
    if (car2) {
        car2.classList.remove('segundo-carro');
    }
}
function insertImage(position) {
    const image = `<img class="compare-img" src="./${carArr[position].image}"> `;
    return image;
}
