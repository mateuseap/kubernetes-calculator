import jsonpickle
from backend.data.instance import *
from flask import Flask

app = Flask(__name__)


@app.route("/")
def hello_world():
    return "Hello, World!"


@app.route("/instances")
def get_instances():
    return {}


@app.route("/mock")
def get_mock_dict():
    instances = Instances()
    instances.add_instance(
        Instance(
            Prices(spot="0.0324", on_demand="0.0725", reserved="0.0478"),
            instance_resources=Resources(vcpu=2, ram=4),
            family="c7g",
            type="large",
            allocatable_pods=29,
        )
    )
    instances.add_instance(
        Instance(
            Prices(spot="0.0679", on_demand="0.1450", reserved="0.0955"),
            instance_resources=Resources(vcpu=4, ram=8),
            family="c7g",
            type="xlarge",
            allocatable_pods=58,
        )
    )
    json_string = jsonpickle.encode(instances, unpicklable=False)
    return json_string, 200, {"Content-Type": "application/json"}
