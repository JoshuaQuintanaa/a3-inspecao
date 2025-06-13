from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

avaliacoes = []


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/contatos')
def contatos():
    return render_template('contatos.html', avaliacoes=avaliacoes)


@app.route('/avaliar', methods=['POST'])
def avaliar():
    nome = request.form.get('nome')
    nomeDaEmpresa = request.form.get('nomeDaEmpresa')
    cpf = request.form.get('cpf')
    cnpj = request.form.get('cnpj')
    telefone = request.form.get('telefone')
    tipo = request.form.get('tipo')
    motivo = request.form.get('motivo')
    dataDeInspecao = request.form.get('data')
    avaliacoes.append({
        'nome': nome,
        'nomeDaEmpresa': nomeDaEmpresa,
        'cpf': cpf,
        'cnpj': cnpj,
        'telefone': telefone,
        'tipo': tipo,
        'motivo': motivo,
        'dataDaInspecao': dataDeInspecao,
    })
    return redirect(url_for('contatos'))



if __name__ == '__main__':
    app.run(debug=True)



