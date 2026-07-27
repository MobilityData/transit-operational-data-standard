# tods-transit.org

Source code for [gbfs.org](https://tods-transit.org/).

This site was built using [MkDocs](https://www.mkdocs.org/), a static site generator, and [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/), a technical documentation theme for MkDocs.

## Editing site

To edit the General Bikeshare Feed Specification reference, go to the [MobilityData/gbfs](https://github.com/MobilityData/TODS/) repository.

To propose a feature, content addition, or UI/UX improvement, open an [issue](https://github.com/MobilityData/tods-transit.org/issues/new) or [pull request](https://github.com/MobilityData/tods-transit.org/pulls) on this repository.

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

## License to Use

Except as otherwise noted, the content of this site is licensed under the [Creative Commons Attribution 3.0 License](https://creativecommons.org/licenses/by/3.0/).