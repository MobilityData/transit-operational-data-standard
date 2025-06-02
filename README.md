# Transit Operational Data Standard

The Transit Operational Data Standard (TODS) is an open standard for describing how to operate scheduled transit operations which can be used to port scheduled operations between software products (e.g. scheduling systems and CAD/AVL systems), agencies, and more. TODS leverages the existing [General Transit Feed Specification](https://gtfs.org) (GTFS) and extends it to include information about personnel and non-revenue service.

Complete documentation published at: <https://ods.calitp.org>

## License to Use

The TODS Specification is licensed under the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0.txt) (code) and [Creative Commons Attribution 4.0](https://creativecommons.org/licenses/by/4.0/) (sample data, specification, and documentation) as defined in <LICENSES> file.

## Citation

If you use the Transit Operational Data Standard in a report or article, please cite it as follows:

> Transit Operational Data Standard Working Group. 2022. Transit Operational Data Standard. Transit Operational Data Standard Board of Directors. https://ods.calitp.org.

Additional citation styles can be found in [CITATION](CITATION).

## Building the site locally

1. In Terminal, change the directory to one where you wish to build the site.
1. Ensure you have an up-to-date version of pip: 
   - Linux: `pip install pip` or `pip install --upgrade pip`
   - macOS: `pip3 install pip` or `pip3 install --upgrade pip`
1. Clone this repository:
   - `git clone https://github.com/MobilityData/operational-data-standard`
1. Change the directory to the cloned repository, and create & enable a Python virtual environment:
   - `python3 -m venv venv`
   - `source venv/bin/activate`
1. Have [`requirements.txt`](requirements.txt) installed:
   - Linux: `pip install --force-reinstall -r requirements.txt`
   - macOS: `pip3 install --force-reinstall -r requirements.txt`
1. To run the site locally (command defined in `MakeFile`):
   - `make serve`
   - Then you can reach the site at this address: `http://127.0.0.1:8000/`
   - To shut down MKdocs from serving the site: `make killserve`
1. To build the site locally only (command defined in `MakeFile`):
   - `make build`
1. Deactivate the Python virtual environment when done:
   - `deactivate`