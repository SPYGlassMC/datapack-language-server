exports['mcdoc numericType Parse "" 1'] = {
  "node": "FAILURE",
  "errors": [
    {
      "range": {
        "start": 0,
        "end": 0
      },
      "message": "Expected “byte”, “short”, “int”, or “long” but got “”",
      "severity": 3
    }
  ]
}

exports['mcdoc numericType Parse "byte" 1'] = {
  "node": {
    "type": "mcdoc:type/numeric_type",
    "children": [
      {
        "type": "mcdoc:literal",
        "range": {
          "start": 0,
          "end": 4
        },
        "value": "byte",
        "colorTokenType": "type"
      }
    ],
    "range": {
      "start": 0,
      "end": 4
    }
  },
  "errors": []
}

exports['mcdoc numericType Parse "double@4.2..5.5" 1'] = {
  "node": {
    "type": "mcdoc:type/numeric_type",
    "children": [
      {
        "type": "mcdoc:literal",
        "range": {
          "start": 0,
          "end": 6
        },
        "value": "double",
        "colorTokenType": "type"
      },
      {
        "type": "mcdoc:float_range",
        "children": [
          {
            "type": "float",
            "range": {
              "start": 7,
              "end": 10
            },
            "value": 4.2
          },
          {
            "type": "mcdoc:literal",
            "range": {
              "start": 10,
              "end": 12
            },
            "value": ".."
          },
          {
            "type": "float",
            "range": {
              "start": 12,
              "end": 15
            },
            "value": 5.5
          }
        ],
        "range": {
          "start": 7,
          "end": 15
        }
      }
    ],
    "range": {
      "start": 0,
      "end": 15
    }
  },
  "errors": []
}

exports['mcdoc numericType Parse "double[]" 1'] = {
  "node": {
    "type": "mcdoc:type/numeric_type",
    "children": [
      {
        "type": "mcdoc:literal",
        "range": {
          "start": 0,
          "end": 6
        },
        "value": "double",
        "colorTokenType": "type"
      }
    ],
    "range": {
      "start": 0,
      "end": 6
    }
  },
  "errors": []
}

exports['mcdoc numericType Parse "int @ ..4" 1'] = {
  "node": {
    "type": "mcdoc:type/numeric_type",
    "children": [
      {
        "type": "mcdoc:literal",
        "range": {
          "start": 0,
          "end": 3
        },
        "value": "int",
        "colorTokenType": "type"
      },
      {
        "type": "mcdoc:int_range",
        "children": [
          {
            "type": "mcdoc:literal",
            "range": {
              "start": 6,
              "end": 8
            },
            "value": ".."
          },
          {
            "type": "integer",
            "range": {
              "start": 8,
              "end": 9
            },
            "value": 4
          }
        ],
        "range": {
          "start": 6,
          "end": 9
        }
      }
    ],
    "range": {
      "start": 0,
      "end": 9
    }
  },
  "errors": []
}

exports['mcdoc numericType Parse "int @ 0..1" 1'] = {
  "node": {
    "type": "mcdoc:type/numeric_type",
    "children": [
      {
        "type": "mcdoc:literal",
        "range": {
          "start": 0,
          "end": 3
        },
        "value": "int",
        "colorTokenType": "type"
      },
      {
        "type": "mcdoc:int_range",
        "children": [
          {
            "type": "integer",
            "range": {
              "start": 6,
              "end": 7
            },
            "value": 0
          },
          {
            "type": "mcdoc:literal",
            "range": {
              "start": 7,
              "end": 9
            },
            "value": ".."
          },
          {
            "type": "integer",
            "range": {
              "start": 9,
              "end": 10
            },
            "value": 1
          }
        ],
        "range": {
          "start": 6,
          "end": 10
        }
      }
    ],
    "range": {
      "start": 0,
      "end": 10
    }
  },
  "errors": []
}

exports['mcdoc numericType Parse "int @ 4" 1'] = {
  "node": {
    "type": "mcdoc:type/numeric_type",
    "children": [
      {
        "type": "mcdoc:literal",
        "range": {
          "start": 0,
          "end": 3
        },
        "value": "int",
        "colorTokenType": "type"
      },
      {
        "type": "mcdoc:int_range",
        "children": [
          {
            "type": "integer",
            "range": {
              "start": 6,
              "end": 7
            },
            "value": 4
          }
        ],
        "range": {
          "start": 6,
          "end": 7
        }
      }
    ],
    "range": {
      "start": 0,
      "end": 7
    }
  },
  "errors": []
}

exports['mcdoc numericType Parse "int @ 4.." 1'] = {
  "node": {
    "type": "mcdoc:type/numeric_type",
    "children": [
      {
        "type": "mcdoc:literal",
        "range": {
          "start": 0,
          "end": 3
        },
        "value": "int",
        "colorTokenType": "type"
      },
      {
        "type": "mcdoc:int_range",
        "children": [
          {
            "type": "integer",
            "range": {
              "start": 6,
              "end": 7
            },
            "value": 4
          },
          {
            "type": "mcdoc:literal",
            "range": {
              "start": 7,
              "end": 9
            },
            "value": ".."
          }
        ],
        "range": {
          "start": 6,
          "end": 9
        }
      }
    ],
    "range": {
      "start": 0,
      "end": 9
    }
  },
  "errors": []
}

exports['mcdoc numericType Parse "other" 1'] = {
  "node": "FAILURE",
  "errors": [
    {
      "range": {
        "start": 0,
        "end": 5
      },
      "message": "Expected “byte”, “short”, “int”, or “long” but got “other”",
      "severity": 3
    }
  ]
}
