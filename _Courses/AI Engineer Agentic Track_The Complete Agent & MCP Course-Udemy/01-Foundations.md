# Foundations

## Install uv

<https://github.com/astral-sh/uv>

```sh
curl -LsSf https://astral.sh/uv/install.sh | sh

# Or
pip install uv

uv --version
# install uv.lock
uv sync

# Create env
uv venv
uv venv --python 3.11


uv pip install requests

uv pip install -r requirements.txt
```
