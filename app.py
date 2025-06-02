from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

tasks = []
task_id = 1

@app.route('/tasks', methods=['GET'])
def get_tasks():
    return jsonify(tasks)

@app.route('/tasks', methods=['POST'])
def add_task():
    global task_id
    data = request.get_json()
    task = {'id': task_id, 'title': data['title']}
    tasks.append(task)
    task_id += 1
    return jsonify(task), 201

@app.route('/tasks/<int:task_id>', methods=['DELETE'])
def delete_task(task_id):
    global tasks
    tasks = [task for task in tasks if task['id'] != task_id]
    return '', 204

if __name__ == '__main__':
    app.run(debug=True)
