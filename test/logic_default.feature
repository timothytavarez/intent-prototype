Feature: IntentSigning
  This describe the expected behavior for an Accord Project's template

  Background:
    Given the default contract

  Scenario: The contract should Respond "Contract successfully executed by Pied Piper LLC represented by Richard Hendricks"
    When it receives the default request
    Then it should respond with
"""
{
    "$class": "org.combinedao.IntentContract.MyResponse",
    "output": "Contract successfully executed by Pied Piper LLC represented by Richard Hendricks"
}
"""

